using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace AuditorsAPI.Models
{
    public class Manager
    {
        [Key]
        public int OfficeID { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string OfficeName { get; set; } = "";

        [Column(TypeName = "nvarchar(16)")]
        public string PhoneNumber { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; } = "";

        [Column(TypeName = "nvarchar(15)")]
        public string TaxNumber { get; set; } = "";

        [Column(TypeName = "nvarchar(10)")]
        public int AccountantsNumber { get; set; }
        [Column(TypeName = "nvarchar(16)")]
        public int EmployeesNumber { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string PublicAccountant { get; set; } = "";

        [Column(TypeName = "nvarchar(15)")]
        public string LeaveNumber { get; set; } = "";

        [Column(TypeName = "nvarchar(10)")]
        public int ExpectedBNumber { get; set; }
    }
}
