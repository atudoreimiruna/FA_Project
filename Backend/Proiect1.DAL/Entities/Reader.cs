using System.Collections.Generic;

namespace Proiect1.DAL.Entities
{
    public class Reader
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Phone { get; set; }

        public virtual ICollection<BookReaders> BookReaders { get; set; } 
        public virtual ReaderAddress ClientAddress { get; set; } 
    }
}