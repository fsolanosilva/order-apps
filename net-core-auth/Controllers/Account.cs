

using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace fortegroup.api
{
    [Route("api/[controller]")]
    public class NoteController : Controller
    {
        private static List<Note> _notes;
        static NoteController()
        {
            _notes = new List<Note>()
            {
                new Note
                {
                    Id = 1,
                    Content = "Renato"
                },
                new Note
                {
                    Id = 2,
                    Content = "Vanessa"
                }
            };
        }


        [HttpGet]
        public IEnumerable<Note> GetAll()
        {
            return _notes.AsReadOnly();
        }

        [HttpGet("{id}", Name = "GetNote")]
        public IActionResult GetById(string id)
        {
            var value = 0;
            int.TryParse(id, out value);
            
            var item = _notes.Find(n => n.Id == value);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Note item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            item.Id = _notes.Count + 1;
            _notes.Add(item);
            return CreatedAtRoute("GetNote", new { controller = "Note", id = item.Id }, item);
        }

        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            var value = 0;
            int.TryParse(id, out value);

            _notes.RemoveAll(n => n.Id == value);
        }        
    }
}