Feature: Book management

Background:
    Given I have access to the APIs


Scenario: Retrieve the list of all books
    When I make a GET request to retrieve all books 'books'
    Then I receive 200 status code

Scenario: Retrieve the list of all books using invalid URL
    When I make a GET request to retrieve all books 'book'
    Then I receive 404 status code

Scenario: Retrieve a book by its ID
    When I make a GET request to retrieve a book by its <id>
    Then I receive 200 status code

    Examples:
    | id |
    |  1 |
    |  2 |

Scenario: Retrieve a book by an invalid id
    When I make a GET request to retrieve a book by its 9999
    Then I receive 404 status code

Scenario: Add a book
    When I make a POST request to add a book with <id>,<title>,<desc>,<pagecount>,<excerpt>
    And The response body matches the request body
    Then I receive 200 status code

    Examples:
    | id | | title       | | desc          | | pagecount | | excerpt           |
    |  1 | | 'BookDemo'  | | 'book desc'   | |  9999     | |  'excerpt of book'| 

Scenario: Update a book
    When I make a PUT request to update a book by its <id> with <title>,<desc>,<pagecount>,<excerpt> 
    And The response body matches the request body
    Then I receive 200 status code

    Examples:
    | id | | title          | | desc          | | pagecount | | excerpt                  |
    |  1 | | 'Update book'  | | 'book desc2'  | |  99999    | |  'excerpt of book update'| 

Scenario: Delete a book
    When I make a Delete request to delete a book by its <id>
    Then I receive 200 status code

    Examples:
    | id |
    |  1 | 