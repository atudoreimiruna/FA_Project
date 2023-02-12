using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Proiect1.DAL.Entities
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }

        public virtual ICollection<BookAward> BookAwards { get; set; } 
        public virtual ICollection<BookReaders> BookReaders { get; set; } 
        public virtual ICollection<BookCollection> BookCollections { get; set; } 
    }
}
