using System;
using System.Collections.Generic;

namespace Proiect1.DAL.Entities
{
    public class Collection
    {
        public int Id { get; set; }
        public string CollectionName { get; set; }
        public int NumberOfItems { get; set; }
        public DateTime ReleaseDate { get; set; }

        public virtual ICollection<BookCollection> BookCollections { get; set; }    
        public virtual ICollection<CollectionFactory> CollectionFactories { get; set; }
    }
}