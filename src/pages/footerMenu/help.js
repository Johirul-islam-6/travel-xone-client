import React from 'react';

const help = () => {
    return (
        <div className='mt-36 mb-20 max-w-screen-xl m-auto'>
            <div>
            <h2 className='text-4xl mb-8 text-sky-400 text-center'>Welcome to our Travel Website Help Center!</h2>
            <h3 className='text-xl mt-3 text-slate-700 font-semibold'>1. How do I search for flights?</h3>
            <p className='font-[system-ui] mt-2 font-medium text-slate-500'>To search for flights, visit our homepage and enter your departure city, destination, travel dates, and the number of passengers. Click on the "Search" button, and our website will display available flight options based on your criteria. You can then filter and sort the results to find the best flights for your needs.</p>
          
            <h3 className='text-xl mt-3 text-slate-700 font-semibold'>2. What should I do if I encounter an error during the booking process?</h3>
            <p className='font-[system-ui] mt-2 font-medium text-slate-500'>If you encounter an error while booking a flight, please try the following steps:</p>
            <ul>
                <li className='text-slate-500 font-[system-ui] font-medium list-disc ml-4'>Refresh the page and try again.</li>
                <li className='text-slate-500 font-[system-ui] font-medium list-disc ml-4'>Clear your browser cache and cookies, then attempt to book again.</li>
                <li className='text-slate-500 font-[system-ui] font-medium list-disc ml-4'>Use a different web browser or device to see if the issue persists.
                If the problem persists, please contact our customer support team for further assistance.</li>
            </ul>
            
            <h3 className='text-xl mt-3 text-slate-700 font-semibold'>3. Can I book a hotel and flight together?</h3>
            <p className='font-[system-ui] mt-2 font-medium text-slate-500'>Yes, you can book a hotel and flight together. Our website offers the option to search for and book flights and hotels as part of a package deal. Simply select the "Flight + Hotel" option on the homepage, enter your travel details, and browse through the available package options.</p>
    
            <h3 className='text-xl mt-3 text-slate-700 font-semibold'>4. What payment methods do you accept?</h3>
            <p className='font-[system-ui] mt-2 font-medium text-slate-500'>We accept various payment methods, including major credit cards (Visa, Mastercard, American Express) and online payment platforms such as PayPal. The available payment methods will be displayed during the booking process.</p>
            <h3 className='text-xl mt-3 text-slate-700 font-semibold'>5. How can I make changes to my booking?</h3>
            <p className='font-[system-ui] mt-2 font-medium text-slate-500'>To make changes to your booking, such as modifying the travel dates, passenger information, or flight preferences, please contact our customer support team. They will assist you with the necessary changes and provide you with any applicable fees or conditions.</p>
            <h3 className='text-xl mt-3 text-slate-700 font-semibold'>6. What if I need to cancel my booking?</h3>
            <p className='font-[system-ui] mt-2 font-medium text-slate-500'>If you need to cancel your booking, please refer to our cancellation policy. The specific details regarding cancellations, including any fees or refunds, depend on the type of booking, fare rules, and the provider's policies. To cancel your booking, please contact our customer support team as soon as possible.</p>
            <h3 className='text-xl mt-3 text-slate-700 font-semibold'>7. How can I check my flight status?</h3>
            <p className='font-[system-ui] mt-2 font-medium text-slate-500'>You can check your flight status by visiting our website's "Flight Status" page. Enter your flight number and date of travel, and the system will provide you with the most up-to-date information regarding your flight's departure time, arrival time, and any potential delays or cancellations.</p>
            <p className='font-[system-ui] mt-5  font-medium text-slate-500'>We hope these FAQs have addressed some of your concerns. If you have any further questions or require additional assistance, please reach out to our customer support team, and we'll be more than happy to help you. Have a great trip!
            </p>
            </div>
        </div>
    );
};

export default help;