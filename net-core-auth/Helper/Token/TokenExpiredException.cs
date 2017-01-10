using System.Collections.Generic;

namespace fortegroup.api
{
    public class TokenExpiredException : SignatureVerificationException
    {
        private const string PayloadDataKey = "PayloadData";
        private const string ExpirationKey = "Expiration";

        public TokenExpiredException(string message)
             : base(message)
        {
        }

        public Dictionary<string, object> PayloadData
        {
            get { return GetOrDefault<Dictionary<string, object>>(PayloadDataKey); }
            internal set { Data.Add(PayloadDataKey, value); }
        }

        public System.DateTime? Expiration
        {
            get { return GetOrDefault<System.DateTime?>(ExpirationKey); }
            internal set { Data.Add(ExpirationKey, value); }
        }
    }
}