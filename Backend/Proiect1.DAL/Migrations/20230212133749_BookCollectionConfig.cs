using Microsoft.EntityFrameworkCore.Migrations;

namespace Proiect1.DAL.Migrations
{
    public partial class BookCollectionConfig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookCollections_Collections_BookId",
                table: "BookCollections");

            migrationBuilder.CreateIndex(
                name: "IX_BookCollections_CollectionId",
                table: "BookCollections",
                column: "CollectionId");

            migrationBuilder.AddForeignKey(
                name: "FK_BookCollections_Collections_CollectionId",
                table: "BookCollections",
                column: "CollectionId",
                principalTable: "Collections",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookCollections_Collections_CollectionId",
                table: "BookCollections");

            migrationBuilder.DropIndex(
                name: "IX_BookCollections_CollectionId",
                table: "BookCollections");

            migrationBuilder.AddForeignKey(
                name: "FK_BookCollections_Collections_BookId",
                table: "BookCollections",
                column: "BookId",
                principalTable: "Collections",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
