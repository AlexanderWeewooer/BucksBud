import './App.css'
import Register from '/components/Register.jsx'
import Banner from '/components/Banner.jsx'

export default function App() {
  return (
    <>  
        <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
          integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
          crossorigin="anonymous"></link>
           <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </head>
        <body>
          <div class="row">
            <div class="col-sm">
              <div class="form-container">
                <Register />
              </div>
            </div>
          </div>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
              integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
              crossorigin="anonymous">
          </script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
              integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
              crossorigin="anonymous">
          </script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
              integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
              crossorigin="anonymous">
          </script>
        </body>
        </html>
    </>
  )
}

