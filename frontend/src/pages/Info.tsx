function Info(){
    return(
    <>
        <p>1. Going to the Display Products page executes the code from "src/pages/DisplayProducts.tsx"</p>
        <p>2. DisplayProducts.tsx gets the product data from the Node.js backend and inserts them into a reusable component at "src/components/ProductCard.tsx" to display the products</p>
        <p>3. After a user selects a product and enters in some information, a confirmation email is sent to them.</p>
        <p>4. A brief note about the backend.
            The file mail.js normally contains the information of the email that is used to automatically send emails.
            However, for security purposes I have removed the email.
            So, if you want to test this program on your own, feel free to use your own credentials in the mail.js file.</p>
    </>)
}
export default Info