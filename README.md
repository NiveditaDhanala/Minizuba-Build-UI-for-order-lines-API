
Request URL: 	https://minizuba-fn.azurewebsites.net/api/orderlines
Request Method:	GET
Params:		- [required] typeID: int
- [optional] quantity: int

typeID - ID of the packaging type. There are 14 types of packaging options available. The value ranges from 1 to 14.
quantity - Number of items ordered under one orderline.

Response:
Results are ordered in ascending order of OrderLineID

Sample response:
[{
"OrderLineID": 307, 
"OrderID": 151, 
"StockItemID": 200, 
"Description": "Black and yellow heavy despatch tape 48mmx100m", 
"PackageTypeID": 1, 
"Quantity": 96, 
"UnitPrice": 4.1
}]

