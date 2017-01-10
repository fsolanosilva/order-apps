

using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace fortegroup.api
{
    [Route("api/[controller]")]
    public class AccountController : Controller
    {
        private UserDAL _dal;
        public AccountController()
        {
            this._dal = new UserDAL("Server=localhost;Database=ForteGroup;Trusted_Connection=false;User Id=sa;Password=Senha12345");
        }

        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult GetById(string id)
        {
            var value = 0;
            int.TryParse(id, out value);
            
            var item = _dal.GetByID(value);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public JsonResult Login([FromBody] User data)
        {
            if (data == null)
            {
                throw new HttpException(404, "data not found");
            }
            var item = _dal.GetByEmail(data.Email);
            if (item == null)
            {
                throw new HttpException(404, "user not found");
            }           
            var token = fortegroup.api.Helper.Token.JsonWebToken.Encode(item, "fortegroup", JwtHashAlgorithm.HS256);
            return new JsonResult(token);
        }
    }
}