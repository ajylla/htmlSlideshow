"""
This Python server is required (I think) because CORS policy
prevents simply fetching files from the file system. Fetching them
via http requests is a workaround.
"""
import http.server
import socketserver

PORT = 8888
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as server:
    print(f"Serving at http://localhost:{PORT}")
    server.serve_forever()
