

const Orderdetails = ({ booking, handleDelete, handleConfirm }) => {
    const {_id, img, title, price, name, email, contact, status } = booking
    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-lg h-20 w-20">
                            {
                                img && <img
                                    src={img}
                                    alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="font-bold">$ {price}</div>
                    </div>
                </div>
            </td>
            <td>
                {name}
            </td>
            <td>$ {price && price}</td>
            <td>{contact}</td>
            <th>
               {
                status === 'confirmed'?<span className="text-primary font-mono font-semibold">confirmed</span>:
                 <button onClick={()=> handleConfirm(_id)} className="btn btn-ghost btn-xs">Pending</button>
               }
            </th>
        </tr>
    );
};

export default Orderdetails;