namespace Proiect1.DAL.Entities
{
    public class BookReaders
    {
        public int Id { get; set; }
        public int BookId { get; set; }
        public int ReaderId { get; set; }

        public virtual Book Book { get; set; }
        public virtual Reader Reader { get; set; }
    }
}
