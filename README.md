## Screenly OSE Asset Control Center

Webapp tool that allows for bulk actions on Screenly OSE devices using API commands via HTTP requests.

### Pending / To-do:

- Access Screenly OSE device when it has `htaccess` configured for authentication. (done)  
  - we can use: curl -k --anyauth --user admin:password -X GET "https://192.168.1.10/api/v1.2/assets" -H  "accept: application/json"  
- Tags (prefaces) based bulk add function (removes all current assets, adds/enables all assets based on tag given)
  - prefaces can be something like test_123abc456def, preface_123abc456def, example_123abc456def, etc..
