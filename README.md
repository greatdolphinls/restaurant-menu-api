# Restaurant Menu API

This project is a Node.js application that provides a GraphQL API for accessing and querying restaurant menu data. It showcases clean code practices, GraphQL integration, and automated testing.

## Features

- **GraphQL API**: Fetch comprehensive menu data categorized into Appetizers, Entrees, Sandwiches, Soups, Fajitas, Tacos, Enchiladas, Quiche, Green Salads, and more.
- **Category and Item Queries**: Retrieve menu items by category, including names, descriptions, and prices.
- **Node.js and Apollo Server**: A simple yet powerful backend structure.
- **Automated Testing**: Ensures the reliability of GraphQL resolvers with Jest.

## Prerequisites

- **Node.js** (v16 or later)
- **Yarn** (package manager)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/restaurant-menu-api.git
   cd restaurant-menu-api
2. **Install dependencies**:
    ```bash
    yarn install
## Running the Application
To start the API server locally, use:
    ```bash
    yarn start

The server will be running on http://localhost:4000/, where you can access the GraphQL Playground.

## Testing
Run the automated tests with:
    ```
    yarn test
    ```
## Usage
You can query the API using GraphQL. Here are some example queries:

### Fetch All Menu Categories and Items
```
    query {
        getMenu {
            name
            items {
            name
            description
            price
            }
        }
    }
```

### Fetch Items from a Specific Category
```bash
    query {
        getMenu {
            name
            items {
            name
            price
            }
        }
    }
```
   
### Example Response
```bash
    {
        "data": {
            "getMenu": [
            {
                "name": "Appetizers",
                "items": [
                {
                    "name": "Iceberg Wedge Salad with House Cured Bacon",
                    "description": "Tomato salsa, gorgonzola",
                    "price": 7.5
                },
                {
                    "name": "Sautéed Shredded Brussels Sprouts",
                    "description": "Bacon, hazelnuts, gorgonzola",
                    "price": 6.95
                }
                ]
            }
            ]
        }
    }
```

