import axios from "axios";
export const getData = async () => {
    let response = await axios.get("http://localhost:8002/High_Intern_Backend/DataLoading");
    let data = response.data.invoices;
   data.map((data, index) => ({...data, "id": index}))
    return data;
}
export const AddData=async({business_code,cust_number,invoice_currency,cust_payment_terms,clear_date,buisness_year,
    doc_id,posting_date,document_create_date,due_in_date,document_type,posting_id,total_open_amount,
    baseline_create_date,invoice_id})=>{
    let data="business_code="+business_code+"&cust_number="+cust_number+"&invoice_currency="+invoice_currency+
   "&cust_payment_terms="+cust_payment_terms+"&clear_date="+clear_date + "&buisness_year="+buisness_year +
   "&doc_id="+doc_id + "&posting_date="+posting_date + "&document_create_date="+document_create_date +
   "&due_in_date="+due_in_date +"&document_type="+document_type + "&posting_id="+posting_id + "&total_open_amount="+
   total_open_amount + "&baseline_create_date="+ baseline_create_date + "&invoice_id="+invoice_id;
    let response=await axios.get("http://localhost:8002/High_Intern_Backend/Add?"+data);
    return response.data;
}
export const updateData=async({sl_no,invoice_currency,cust_payment_terms})=>{
    let data="sl_no="+sl_no+"&invoice_currency="+invoice_currency+"&cust_payment_terms="+cust_payment_terms;
    let response=await axios.get("http://localhost:8002/High_Intern_Backend/Edit?"+data);
    return response.data;
}
export const deleteData=async(sl_no)=>{
    let data="sl_no="+sl_no;
    let response=await axios.get("http://localhost:8002/High_Intern_Backend/Delete?"+data);
    return response.data;
}
export const advanceSearch = async ({sl_no,doc_id,cust_number,invoice_id,buisness_year}) => {
   // let data = "doc_id=" + doc_id + "&cust_number=" + cust_number + "&invoice_id=" + invoice_id + "&buisness_year=" +buisness_year;
    let response = await axios.get("http://localhost:8002/High_Intern_Backend/Advanced_search?" + data).then((response) => {
        let data = response.data.advance;
        data.map((data, index) => ({...data, "id": index}))
    });

}