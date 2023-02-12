using System;

namespace Proiect1.DAL.Entities
{
    public class BookAward
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Contest { get; set; }
        public DateTime Data { get; set; }
        public int BookId { get; set; }

        public virtual Book Book { get; set; } 
    }
}
