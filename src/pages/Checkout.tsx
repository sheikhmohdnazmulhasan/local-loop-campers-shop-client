import { IoWarning } from "react-icons/io5";
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";

const Checkout = () => {
    const [user, setUser] = useState('');

    const cart = useAppSelector((state) => state.cart);

    // calculation
    const subTotal: number = cart.reduce(((acc, value) => acc + value.payable), 0);
    const deliveryCharge: number = 15 * cart.length;
    const vat: number = parseFloat((subTotal / 100 * .4).toFixed(2));
    const total: number = subTotal + deliveryCharge + vat;



    return (
        <section className="bg-white py-8 antialiased md:px-10">
            <form className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500">
                    <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                        <span className="flex items-center after:mx-2 text-red-600 after:content-['/']  sm:after:hidden">
                            <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" color="red" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Cart
                        </span>
                    </li>

                    <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                        <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/']  sm:after:hidden">
                            <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Checkout
                        </span>
                    </li>

                    <li className="flex shrink-0 items-center">
                        <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Order summary
                    </li>
                </ol>

                <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <div className="min-w-0 flex-1 space-y-8">
                        <div className="space-y-4">

                            {user ? (
                                <div className="">
                                    <h2 className="text-xl font-semibold text-gray-900 -mb-1">Hi,<span className="text-rose-600"> {user}!</span></h2>
                                    <p className="text-sm">Give us Your Delivery Details</p>
                                </div>
                            ) : (
                                <h2 className="text-xl font-semibold text-gray-900">Delivery Details</h2>
                            )}





                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-gray-900 "> Your name </label>
                                    <input onBlur={(e) => setUser(e.target.value)} type="text" id="your_name" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Sheikh" required />
                                </div>

                                <div>
                                    <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-gray-900 "> Your email* </label>
                                    <input type="email" id="your_email" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="name@example.com" required />
                                </div>

                                <div>
                                    <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-900 "> Country* </label>
                                    <input type="email" id="country" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Bangladesh" required />
                                </div>

                                <div>
                                    <label htmlFor="city" className="mb-2 block text-sm font-medium text-gray-900 "> City* </label>
                                    <input type="email" id="city" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="Rangpur" required />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 "> Phone Number* </label>
                                    <div className="flex items-center">
                                        <button id="dropdown-phone-button-3" data-dropdown-toggle="dropdown-phone-3" className="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 " type="button">

                                            +880
                                            <svg className="-me-0.5 ms-2 h-4 w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
                                            </svg>
                                        </button>

                                        <div className="relative w-full">

                                            <input type="text" id="phone" className="z-20 block w-full rounded-e-lg border border-s-0 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="177-0000000" required />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="post_code" className="mb-2 block text-sm font-medium text-gray-900"> Postal Code </label>
                                    <input type="text" id="post_code" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500" placeholder="5660" required />
                                </div>

                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 ">Payment</h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input id="credit-card" aria-describedby="credit-card-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600" checked />
                                        </div>

                                        <div className="ms-4 text-sm">
                                            <label htmlFor="credit-card" className="font-medium leading-none text-gray-900 "> Cash on Delivery </label>
                                            <p id="credit-card-text" className="mt-1 text-xs font-normal text-gray-500 "> Pay after received</p>
                                        </div>
                                    </div>


                                </div>

                                <div className="rounded-lg border border-gray-200 opacity-55 bg-gray-50 p-4 ps-4 ">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input id="pay-on-delivery" disabled aria-describedby="pay-on-delivery-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 " />
                                        </div>

                                        <div className="ms-4 text-sm">
                                            <label htmlFor="pay-on-delivery" className="font-medium leading-none text-gray-900 "> Credit Card </label>
                                            <p id="fedex-text" className="mt-1 text-xs font-normal text-gray-500 flex items-center gap-2"><IoWarning /> Not Available</p>
                                        </div>
                                    </div>


                                </div>

                                <div className="rounded-lg border border-gray-200 bg-gray-50 opacity-55 p-4 ps-4 ">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input id="paypal-2" disabled aria-describedby="paypal-text" type="radio" name="payment-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 " />
                                        </div>

                                        <div className="ms-4 text-sm">
                                            <label htmlFor="paypal-2" className="font-medium leading-none text-gray-900 "> Paypal account </label>
                                            <p id="fedex-text" className="mt-1 text-xs font-normal text-gray-500 flex items-center gap-2"><IoWarning /> Not Available</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 ">Delivery Methods</h3>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input id="dhl" aria-describedby="dhl-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 " checked />
                                        </div>

                                        <div className="ms-4 text-sm">
                                            <label htmlFor="dhl" className="font-medium leading-none text-gray-900"> $15 - DHL Fast Delivery </label>
                                            <p id="dhl-text" className="mt-1 text-xs font-normal text-gray-500">Get it by Tommorow</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg border border-gray-200 bg-gray-50 opacity-55 p-4 ps-4">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input id="fedex" aria-describedby="fedex-text" disabled type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 " />
                                        </div>

                                        <div className="ms-4 text-sm">
                                            <label htmlFor="fedex" className="font-medium leading-none text-gray-900 "> Free Delivery - FedEx (Local)</label>
                                            <p id="fedex-text" className="mt-1 text-xs font-normal text-gray-500 flex items-center gap-2"><IoWarning /> Not Available</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-lg border border-gray-200 opacity-55 bg-gray-50 p-4 ps-4:border-gray-700">
                                    <div className="flex items-start">
                                        <div className="flex h-5 items-center">
                                            <input id="express" disabled aria-describedby="express-text" type="radio" name="delivery-method" value="" className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 " />
                                        </div>

                                        <div className="ms-4 text-sm">
                                            <label htmlFor="express" className="font-medium leading-none text-gray-900 "> $49 - Express Delivery </label>
                                            <p id="fedex-text" className="mt-1 text-xs font-normal text-gray-500 flex items-center gap-2"><IoWarning /> Not Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                        <div className="flow-root">
                            <div className="-my-3 divide-y divide-gray-200">
                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500 ">Subtotal</dt>
                                    <dd className="text-base font-medium text-gray-900 ">${subTotal}</dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500 ">Savings</dt>
                                    <dd className="text-base font-medium text-green-500">0</dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500">Delivery</dt>
                                    <dd className="text-base font-medium text-gray-900 ">${deliveryCharge}</dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-normal text-gray-500">Tax</dt>
                                    <dd className="text-base font-medium text-gray-900 ">${vat} </dd>
                                </dl>

                                <dl className="flex items-center justify-between gap-4 py-3">
                                    <dt className="text-base font-bold text-gray-900 ">Total</dt>
                                    <dd className="text-base font-bold text-gray-900 ">${total}</dd>
                                </dl>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <button type="submit" className="flex bg-rose-600 w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white ">Confirm</button>



                            <p className="text-sm font-normal text-gray-500 ">By checkout we will assume you have accepted our  <a title="" className="font-medium text-primary-700 underline hover:no-underline "> terms and conditions.</a>.</p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Checkout;