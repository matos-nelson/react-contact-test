# Brief Media React Assessment

## Challenge

Your task is to utilize a simple API to create a `Contact Management` web application. Using RESTful endpoints, you should create an application that can create, read, update, and delete contacts.

## API Definitions

### Create:

curl --location --request POST '/api/v1/contact' \
--header 'Content-Type: application/json' \
--data-raw '{
"firstName": "John",
"lastName": "Doe",
"birthDate": "1985/06/21",
"address": "1234 S. Riverwood Rd., Cincinnati, Ohio, 45203",
"emailAddresses": ["jdoe@briefmedia.com", "jooeisnotreal@somerandomnonexistanturl.org"],
"phoneNumbers": [
{
"type": "Home",
"number": "+18135555555"
},
{
"type": "Cell",
"number": "+14571235467"
}
]
}'

### Read 1

curl --location --request GET '/api/v1/contact?id=123'

### Read Multiple

curl --location --request GET '/api/v1/contact?page=0&offset=1'

### Update (OK to only pass updated fields)

curl --location --request PUT '/api/v1/contact' \
--header 'Content-Type: application/json' \
--data-raw '{
"id": 1,
"firstName": "Chuck",
"lastName": "Norris",
"birthDate": "1940/03/10",
"address": "Everywhere"
}'

### Delete

curl --location --request DELETE '/api/v1/contact?id=123'

### What we are looking for

We are attempting to evaluate your proficiency and confidence with React and Javascript.
Please spend the most time on the portions of the app that will best demonstrate your aptitude
for the role for which you are being considered. If time is a constraint, we would rather see a few things done
well than many things done to a lower standard.
Please use good programming patterns.
Really, we are just looking for good code.

##### Tests:

- Please include unit tests for your code.

### Question?

Email questions to:

Becca Thompson
[becca@briefmedia.com](mailto:becca@briefmedia.com)

## Notes

#### Requirements not completed as listed in doc.

1. Did not support multiple emails in form.
2. Did not support multiple phone numbers in form.
3. Did not complete read multiple functionality as listed. Instead I did a read all type of functionality and let the table handle the pagination.

### Assumptions

1. I assumed I was not to create a restful endpoint ie. backend. Instead I mocked data and the date can be found in the mockContactData.js file.

### App Commands

Install app dependencies
`npm install`

Start the app with
`npm start`

or run unit tests with coverage with
`npm test -- --coverage --watchAll`

### Functionality

Once the app is started, you will land on the Dashboard. Simply click on the clients tab in the sidebar located on the left.
Once you click on the tab, you will be navigated to the contacts page. Here you will be able to view all contacts in a table. You can search through contacts using the search input in the table.

To add a contact, click on add contact button. This will open a modal that contains a form. The form has validation functionality. Once all fields have been filled, click on save button to save the contact. Once you save, the contact will persist and show in the table.

To edit a contact, click on the contact in the table. This will open a modal that contains the contacts details. In the upper left corner of the modal, click on the edit button. This will navigate you to the edit contact page. The form shares the same functionality as the add form. To navigate back to the contacts page, either click on cancel or the clients tab in the sidebar.

To delete a contact, click on the contact in the table. This will open a modal that contains the contacts details. In the upper left corner of the modal, click on the delete button. This will delete the contact from persistence and remove the client in the table.
