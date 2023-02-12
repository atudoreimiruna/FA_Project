using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Proiect1.DAL.Entities;

namespace Proiect1.DAL.Configurations
{
    public class BookReaderConfiguration : IEntityTypeConfiguration<BookReaders>
    {
        public void Configure(EntityTypeBuilder<BookReaders> builder)
        {
            builder.HasOne(p => p.Book)
                .WithMany(p => p.BookReaders)
                .HasForeignKey(p => p.BookId);

            builder.HasOne(p => p.Reader)
                .WithMany(p => p.BookReaders)
                .HasForeignKey(p => p.ReaderId);
        }
    }
}
