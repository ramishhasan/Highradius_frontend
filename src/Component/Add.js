function Add({business_code,cust_number,changeHandler,submitHandler})
{
  return <>
  <form>
    <label>business_code</label>
    <input name="business_code" value={business_code} onChange={changeHandler}/>
    
    <label>cust_number</label>
    <input name="cust_number" value={cust_number} onChange={changeHandler}/>
    <input type={"submit"} value={"cust_number"} onClick={submitHandler}/>
    </form></>
}
export default Add;