using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApplication2
{
    public partial class Form1 : Form
    {
        const string SECRET_KEY = "GQDstcKsx0NHjPOuXOYg5MbeJ1XT0uFiwDVvVBrk";

        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            
        }

        private void encodeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            string token = JWT.JsonWebToken.Encode(txtData.Text, SECRET_KEY, JWT.JwtHashAlgorithm.HS256);
            txtResult.Text = token;
        }

        private void decodeToolStripMenuItem_Click(object sender, EventArgs e)
        {
            try
            {
                string token = JWT.JsonWebToken.Decode(txtData.Text, SECRET_KEY);
                txtResult.Text = token;
            }
            catch (JWT.SignatureVerificationException)
            {
                txtResult.Text = "Invalid token!";
            }            
        }
    }
}
