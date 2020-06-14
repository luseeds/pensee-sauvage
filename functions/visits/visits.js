// necessary for async/await
// import "regenerator-runtime/runtime"
// // fetch implementation for node
const fetch = require("node-fetch")
require("dotenv").config()

// Store your Sheets url in your environment vars
const { VISITS_URL } = process.env
exports.handler = async function(event) {
  // Post to Google Sheets endpoint
  try {
    if (!VISITS_URL) {
      throw new Error("VISITS_URL NOT DEFINED")
    }
    const page = event.queryStringParameters.page || "undefined"
    const response = await fetch(`${VISITS_URL}?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ result: "All good" })
    }
  } catch (error) {
    console.log(error) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: "An error occured.." })
    }
  }
}
