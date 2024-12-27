using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AuditorsAPI.Migrations
{
    /// <inheritdoc />
    public partial class FMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ManagerD",
                columns: table => new
                {
                    OfficeID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OfficeName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(16)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    TaxNumber = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    AccountantsNumber = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    EmployeesNumber = table.Column<string>(type: "nvarchar(16)", nullable: false),
                    PublicAccountant = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    LeaveNumber = table.Column<string>(type: "nvarchar(15)", nullable: false),
                    ExpectedBNumber = table.Column<string>(type: "nvarchar(10)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ManagerD", x => x.OfficeID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ManagerD");
        }
    }
}
