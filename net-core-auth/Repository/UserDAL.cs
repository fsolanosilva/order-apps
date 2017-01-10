using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;

namespace fortegroup.api
{
    public class UserDAL
    {
        protected IDbConnection Connection
        {
            get;  set;
        }

        public UserDAL(string connectionString)
        {
            this.Connection = new SqlConnection(connectionString);
        }

        public IEnumerable<User> GetAll()
        {
            using (IDbConnection dbConnection = Connection)
            {
                dbConnection.Open();
                return dbConnection.Query<User>("SELECT * FROM dbo.Users");
            }
        }

        public User GetByID(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = "SELECT * FROM dbo.Users WHERE Id = @Id";
                dbConnection.Open();
                return dbConnection.Query<User>(sQuery, new { Id = id }).FirstOrDefault();
            }
        }

        public User GetByEmail(string email)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = "SELECT * FROM dbo.Users WHERE Email = @Email";
                dbConnection.Open();
                return dbConnection.Query<User>(sQuery, new { Email = email }).FirstOrDefault();
            }
        }
    }
}