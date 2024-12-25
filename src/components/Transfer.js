import React from 'react'

const Transfer = () => {
    const [bankFlag, setBankFlag] = React.useState('')
    const bank = (data) => {
        setBankFlag(data)
    }
    return (
        <div className='py-20 p-4'>
            <div>
                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div class="text-gray-600">
                            <p class="font-medium text-lg">MoneyTransfer</p>
                            <div>
                                <h4>Please select</h4>
                                <div class="grid sm:grid-cols-2 gap-2">
                                    <label for="hs-radio-in-form" class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                        <input type="radio" onClick={() => bank('same')} name="hs-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-in-form" />
                                        <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">Same Bank</span>
                                    </label>

                                    <label for="hs-radio-checked-in-form" class="flex p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
                                        <input type="radio" onClick={() => bank('other')} name="hs-radio-in-form" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-checked-in-form" />
                                        <span class="text-sm text-gray-500 ms-3 dark:text-neutral-400">Other Bank</span>
                                    </label>
                                </div>
                            </div>
                            <br />
                            <span class="text-1xl font-bold">Account Number : 123456</span><br /><br />
                            <span class="text-1xl font-bold">Account Balance &nbsp;: $ 10000.0</span>
                        </div>
                        {
                            bankFlag === 'same' ?
                                (<div class="lg:col-span-2">
                                    <div>
                                        <span><b>Havi Bank</b></span>

                                    </div>

                                    <div class="md:col-span-2 mt-2">
                                        <label for="state">Accountholder Name</label>
                                        <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                                    </div>
                                    <div class="md:col-span-2 mt-2">
                                        <label for="state">Account Number</label>
                                        <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                                    </div>
                                    <div class="md:col-span-2 mt-2">
                                        <label for="state">Amount</label>
                                        <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                                    </div>
                                    <div class="md:col-span-2 mt-2">
                                        <label for="state">Select Payment type</label>
                                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Payment method</option>
                                            <option value="US">NIFT</option>
                                            <option value="CA">IMPS</option>
                                            <option value="FR">CreditCard</option>
                                        </select>
                                    </div><br />
                                    <div class="md:col-span-5 text-right">
                                        <div class="inline-flex items-end">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Transfer</button>
                                        </div>
                                    </div>
                                </div>)
                                :
                                (bankFlag === 'other' ? <div class="lg:col-span-2">
                                    <span><b>Havi Bank</b></span>
                                    <div className='mt-1.5'>
                                        <div class="md:col-span-2">
                                            <label for="city">Bank Name</label>
                                            <input type="text" name="city" id="city" class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" value="" placeholder="" />
                                        </div>
                                        <div class="md:col-span-2 mt-2">
                                            <label for="state">Accountholder Name</label>
                                            <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                                        </div>
                                        <div class="md:col-span-2 mt-2">
                                            <label for="state">Account Number</label>
                                            <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                                        </div>
                                        <div class="md:col-span-2 mt-2">
                                            <label for="state">IFSC</label>
                                            <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                                        </div>
                                        <div class="md:col-span-2 mt-2">
                                            <label for="state">Amount</label>
                                            <input type="text" name="zipcode" id="zipcode" class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" value="" />
                                        </div>
                                        <div class="md:col-span-2 mt-2">
                                            <label for="state">Select Payment type</label>
                                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option selected>Payment method</option>
                                                <option value="US">NIFT</option>
                                                <option value="CA">IMPS</option>
                                                <option value="FR">CreditCard</option>
                                            </select>
                                        </div><br />
                                        <div class="md:col-span-5 text-right">
                                            <div class="inline-flex items-end">
                                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Transfer</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> : null)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transfer