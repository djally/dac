[![Build Status](https://travis-ci.org/djally/dac.svg?branch=develop)](https://travis-ci.org/djally/dac)
[![Coverage Status](https://coveralls.io/repos/github/djally/dac/badge.svg?branch=develop)](https://coveralls.io/github/djally/dac?branch=develop)
# data analysis and communication 
Have you ever felt like a phone call that's been disconnected? Give a chance to call you please and I will give you important things in your life
### Description
data analysis and communication project is a platform where customers are able to call, send message to their members also manage possible activities for their members and themselves.

### Setup
> this must be PREN project which must have travis connected to it and coveralls
> add all possible configuration needed here.
### API Spec

The preferred JSON object to be returned by the API should be structured as follows:

#### Users (for authentication)
```
{
  "user": {
    "email": "jake@jake.jake",
    "token": "jwt.token.here",
    "username": "jake"
    "image": null
  }
}
```

#### Profile
```
{
  "profile": {
    "username": "jake"
    "image": "image-link"
  }
}
```

#### Single Member
```
{
    "members": {
        "names": "Karangwa Hirwa Julien",
        "email": "juliushirwa@gmail.com",
        "phone": "250782061714",
        "location": "Rubavu, KK 121",
        "province": "Rubavu",
        "district": "Gisenyi",
        "sector": "Bugoyi"
    }
}
```

#### Multiple Members
```
{
    "members": [{
        "names": "Karangwa Hirwa Julien",
        "email": "juliushirwa@gmail.com",
        "phone": "250782061714",
        "location": "Rubavu, KK 121",
        "province": "Rubavu",
        "district": "Gisenyi",
        "sector": "Bugoyi"
    }, {
       "names": "Karangwa Hirwa Julien",
        "email": "juliushirwa@gmail.com",
        "phone": "250782061714",
        "location": "Rubavu, KK 121",
        "province": "Rubavu",
        "district": "Gisenyi",
        "sector": "Bugoyi" 
    }]
}
```

#### Errors and Status Codes
If a request fails any validations, expect errors in the following format:
```
{
  "errors":{
    "body": [
      "can't be empty"
    ]
  }
}
```

#### Other status codes:

401 for Unauthorized requests, when a request requires authentication but it isn't provided

403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action

404 for Not found requests, when a resource can't be found to fulfill the request

### Endpoints:
------------


