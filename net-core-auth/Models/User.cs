using System.ComponentModel.DataAnnotations;

namespace fortegroup.api
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Pwd { get; set; }
        public string Name { get; set; }
    }
}
