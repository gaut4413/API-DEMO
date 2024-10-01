Feature: authors management

Background:
    Given I have access to the APIs


Scenario: Retrieve the list of all authors
    When I make a GET request to retrieve all authors 'authors'
    Then I receive 200 status code

Scenario: Retrieve the list of all authors using invalid URL
    When I make a GET request to retrieve all authors 'author'
    Then I receive 404 status code

Scenario: Retrieve a authors by its ID
    When I make a GET request to retrieve a author by its <id>
    Then I receive 200 status code

    Examples:
    | id |
    |  1 |
    |  2 |
    | 999|

Scenario: Retrieve a authors by an invalid id
    When I make a GET request to retrieve a author by its 9999
    Then I receive 404 status code

Scenario: Add a authors
    When I make a POST request to add a author with <id>,<idBook>,<firstName>,<lastName>
    And The response body matches the request body
    Then I receive 200 status code

    Examples:
    | id | | idBook | | firstName  | | lastName |
    | 999| | 100    | | 'Rahul'    | |  'Roy'   |

Scenario: Update a authors
    When I make a PUT request to update a author by its <id> with <idBook>,<firstName>,<lastName>
    And The response body matches the request body
    Then I receive 200 status code

    Examples:
    | id | | idBook | | firstName  | | lastName |
    | 1  | | 22     | | 'Rahul'    | |  'Roy'   | 

Scenario: Delete a authors
    When I make a Delete request to delete a author by its <id>
    Then I receive 200 status code

    Examples:
    | id |
    |  1 | 