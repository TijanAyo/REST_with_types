require('dotenv').config()

export default {
    port: 4030,
    dbURI: `mongodb+srv://Tijan:${process.env.DB_PASS}@getting-started-with-no.sdrkl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    accessTokenTtl: '15m',      // access token time to live
    refreshTokenTtl: '1y',      // refresh token time to live
    PublicKey:`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCHj9uoofgIPjkZ6SyFwX7zT9Hn
LAyCB7UywpLEJjbYosdlrNKEb/ZzSogkTYwYavBLCYyaoXq0f1MLAChMmeptHWjQ
0US399jRg2UDJe7ueP7RVDAmJfLe7lmE39sIk8egfH9Zycf/Kz7rEbhMcWnVVWzh
SUmq+SXTq88WMZfkmwIDAQAB
-----END PUBLIC KEY-----`,
    PrivateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQCHj9uoofgIPjkZ6SyFwX7zT9HnLAyCB7UywpLEJjbYosdlrNKE
b/ZzSogkTYwYavBLCYyaoXq0f1MLAChMmeptHWjQ0US399jRg2UDJe7ueP7RVDAm
JfLe7lmE39sIk8egfH9Zycf/Kz7rEbhMcWnVVWzhSUmq+SXTq88WMZfkmwIDAQAB
AoGAGS8JgJ9uY6GjnAOsaMDUo8DtXsPZIwLpj5+EAnqS79X1sxbTGRVvtGVhO1VI
tHSRZW9FtqhPEl8g/0ctNWXWnd48uE6gqEMm29GOyJXceeGAFNAtbteUzYugkQsy
HFkywRNCo38hrqtcFOJrI1gO6TREXNZJXWayAkDwEP1EWXkCQQDhutO7hgCSWgO9
rGyEMEM1nL1G/UooAEadzf1YyM4WVy3GBaDZiotOEH3STdBRssQ82ZAMCIAc4E3B
KKuXla+nAkEAmb2e+7GTt9q2TDy3lo6rpGatNF3A3gP7PHZSBQn0G26CBRmtdnMd
7VBml7+l4PdRn4is9xAuifGFxUID9pph7QJAT6gVRcyQ8RRw04NAPBmn7ghkxuNl
Qt5uDQv/BlC+YSXckk+0JnB8nky1ifxJsjrqgyqnaYeqZgZFig9nFjQNawJAemcA
NwAQzeZyEYyd1l7MxV2CNRkXvyuIUYEamCxuj5CSMCFbe9z3TMQgilzpYo1GDTAy
FZpqkyUaDg0bPrF3mQJAFkKm6ohxjVSWA6+e0TNQyOCT5XRASrx8TTcJ6B7l6eQo
dQZ8gcMU+cOps2pDdTNZCC5Ox6A5nHs2IQKBd84fWA==
-----END RSA PRIVATE KEY-----`,
};