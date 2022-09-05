# Harry-Potter-Howler-Generator

Application that allows users to input a type of alcohol and veiw a carousel of cocktails containling that alcohol.

Each Cocktail includes
* an image of the drink
* a list of ingredients
* mixing instructions
## Tech Stack

HTML, CSS, JS


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Optimizations
* Utilize OOP to make code less 'WET'
* Refactor CSS so that the next and previous buttons do not shift 
* Automate carosel
## Lessons Learned ##

Always check for edge cases.  
