

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
            _dal = new UserDAL("Server=localhost;Database=ForteGroup;Trusted_Connection=false;User Id=sa;Password=Senha12345");
        }

        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return _dal.GetAll();
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
        public IActionResult Create([FromBody] User item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            return CreatedAtRoute("GetUser", new { controller = "Account", id = item.Id }, item);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            var value = 0;
            int.TryParse(id, out value);

            return null;
        }        
    }
}