
function Modal({ children }){
return(
<div style={{height: '100vh',display: 'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} className="py-5">
    {children}
</div>
)
}
export default Modal;