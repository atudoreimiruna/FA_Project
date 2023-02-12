using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Proiect1.DAL.Configuration;
using Proiect1.DAL.Configurations;
using Proiect1.DAL.Entities;
using System;

namespace Proiect1.DAL
{
    public class AppDbContext : IdentityDbContext<
        User,
        Role,
        int,
        IdentityUserClaim<int>,
        UserRole,
        IdentityUserLogin<int>,
        IdentityRoleClaim<int>,
        IdentityUserToken<int>>

    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Book> Books { get; set; }
        public DbSet<ReaderAddress> ReaderAddresses { get; set; }
        public DbSet<BookAward> BookAwards { get; set; }
        public DbSet<Reader> Readers { get; set; }
        public DbSet<BookReaders> BookReaders { get; set; }
        public DbSet<Collection> Collections { get; set; }
        public DbSet<BookCollection> BookCollections { get; set; }
        public DbSet<CollectionFactory> CollectionFactories { get; set; }
        public DbSet<ReaderAddress> ClientAddresses { get; set; }
        public DbSet<NewsLetter> NewsLetters { get; set; } 
        public DbSet<Feedback> Feedbacks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new BookConfiguration());
            modelBuilder.ApplyConfiguration(new ReaderAddressConfiguration());
            modelBuilder.ApplyConfiguration(new BookAwardConfiguration());
            modelBuilder.ApplyConfiguration(new ReaderConfiguration());
            modelBuilder.ApplyConfiguration(new BookReaderConfiguration());
            modelBuilder.ApplyConfiguration(new CollectionConfiguration());
            modelBuilder.ApplyConfiguration(new BookCollectionConfiguration());
            modelBuilder.ApplyConfiguration(new CollectionFactoryConfiguration());
            modelBuilder.ApplyConfiguration(new NewsLetterConfiguration());
            modelBuilder.ApplyConfiguration(new FeedbackConfiguration());
        }
        
        public Book Find(Book id)
        {
            throw new NotImplementedException();
        }
    }
}
