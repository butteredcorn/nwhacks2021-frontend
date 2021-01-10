import React , { useState , useEffect } from 'react'
import { PageContainer, SectionContainer, MainHeading, SubHeading } from '../css/main'
import { purchaseCompleted } from '../controllers/server-routes'

function PostPayment({}) {

    const [message , setMessage] = useState('')

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        const orderId = query.get("order")
        if (query.get("success")) {
          setMessage("Your order is on its way");
          purchaseCompleted(orderId)
        }
        if (query.get("canceled")) {
          setMessage(
            "Oops... That did not work out!"
          );
        }
      }, []);

    return (
        <div>
        
        <PageContainer>
            <main>
                <SectionContainer>
                    <MainHeading>{message}</MainHeading>
                </SectionContainer>
            </main>
            <footer>
            </footer>
        </PageContainer>
    </div>
    )
}

export default PostPayment;