namespace Proiect1.DAL.Entities
{
    public class ReaderAddress
    {
        public int Id { get; set; }
        public string City { get; set; }
        public int Zipcode { get; set; }
        public int ReaderId { get; set; }
        public virtual Reader Reader { get; set; } 
    }
}
