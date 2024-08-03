import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCreateProductMutation } from "../../redux/features/products/product.api";

const AddProduct = () => {

    const [showImagePreview, setShowImagePreview] = useState([]);
    const [files, setFiles] = useState([])
    const [x, setX] = useState(false);
    const navigate = useNavigate();
    const [createProduct, {isError, isLoading}] = useCreateProductMutation()

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;

        if (selectedFiles && selectedFiles.length > 0) {
            setFiles(Array.from(selectedFiles));
            setX(true)
        }
    }

    const handleClearFile = () => {
        setX(false)
        setShowImagePreview([]);
    };

    // preview files
    useEffect(() => {
        if (files.length) {
            const previewUrl = files.map((file) => URL.createObjectURL(file));
            setShowImagePreview(previewUrl);
        }
    }, [files]);

    async function handleAddProduct(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const toastId = toast.loading('Working...')

        const title = (event.currentTarget.elements.namedItem('title') as HTMLInputElement).value.trim();
        const description = (event.currentTarget.elements.namedItem('description') as HTMLInputElement).value.trim();
        const quantity = parseFloat((event.currentTarget.elements.namedItem('quantity') as HTMLInputElement).value);
        const category = (event.currentTarget.elements.namedItem('category') as HTMLInputElement).value.trim();
        const price = parseFloat((event.currentTarget.elements.namedItem('price') as HTMLInputElement).value);
        const images = []


        try {

            for (let i = 0; i < files.length; i++) {
                const image = new FormData();
                image.append('image', files[i]);

                const imgBbResponse = await axios.post(
                    `https://api.imgbb.com/1/upload?key=4b159d954d16c4775776e8c6e880b320`,
                    image
                );

                images.push(imgBbResponse.data.data.display_url);
                console.log(imgBbResponse.data.data.display_url);
            }

            const dataForBackend = { title, description, quantity, category, price, images }
            // const serverResponse = await axios.post(`http://localhost:5000/api/v1/products/new`, dataForBackend);
            const serverResponse = await createProduct(dataForBackend).unwrap();

            if (serverResponse.success) {
                toast.success('Product Added', { id: toastId });
                handleClearFile();
                navigate('/dashboard/products')

            }

        } catch (error) {
            toast.error('Something Wrong!', { id: toastId })
        }

    }


    return (
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
            <h2 className="text-lg font-semibold text-gray-700 capitalize mb-3">Add Product</h2>

            <form onSubmit={handleAddProduct}>
                <div>
                    <label className="text-gray-700 " htmlFor="title">Title</label>
                    <input id="title" name="title" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " required />

                    <div className="mt-2">
                        <label className="text-gray-700" htmlFor="description">Description</label>
                        <input id="description" name="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " required />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                    <div>
                        <label className="text-gray-700" htmlFor="category">Category</label>
                        <select id="category" name="category" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " required>
                            <option value="smartphone">Smartphone</option>
                            <option value="laptop">Laptop</option>
                            <option value="drone">Drone</option>
                            <option value="camera">Camera</option>
                            <option value="Headphone">Headphone</option>
                            <option value="robotic">Robotic</option>
                            <option value="vr">VR</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-gray-700" htmlFor="emailAddress">Quantity</label>
                        <input id="quantity" name="quantity" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  " required />
                    </div>

                    <div>
                        <label className="text-gray-700" htmlFor="username">Price</label>
                        <input id="price" name="price" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md " required />
                    </div>

                </div>

                <div className="  my-10 ">
                    {x ? (
                        <div className=" mx-auto flex flex-wrap items-center gap-x-6  rounded-lg border-2 border-dashed border-gray-400 p-5 bg-white space-y-4">

                            {showImagePreview?.map(img => <img className="w-full max-w-[150px] rounded-lg object-cover" src={img} />)}


                            <div className="flex-1 space-y-1.5 overflow-hidden">
                                {/* <h5 className="text-xl font-medium tracking-tight truncate">{showName?.name}</h5> */}
                                {/* <p className="text-gray-500">{(showName.size / 1024).toFixed(1)} KB</p> */}
                            </div>
                            <div onClick={handleClearFile}>
                                <svg width={30} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="#000000"></path></g>
                                </svg>
                            </div>
                        </div>
                    ) : (
                        <label className=" mx-auto flex flex-col items-center justify-center space-y-3 rounded-lg border-2 border-dashed border-gray-400 p-6 bg-white" htmlFor="file5">
                            <svg width={50} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 42 32" enableBackground="new 0 0 42 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path fill="black" d="M33.958,12.988C33.531,6.376,28.933,0,20.5,0C12.787,0,6.839,5.733,6.524,13.384 C2.304,14.697,0,19.213,0,22.5C0,27.561,4.206,32,9,32h6.5c0.276,0,0.5-0.224,0.5-0.5S15.776,31,15.5,31H9c-4.262,0-8-3.972-8-8.5 C1,19.449,3.674,14,9,14h1.5c0.276,0,0.5-0.224,0.5-0.5S10.776,13,10.5,13H9c-0.509,0-0.99,0.057-1.459,0.139 C7.933,7.149,12.486,1,20.5,1C29.088,1,33,7.739,33,14v1.5c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5V14 c0-0.003,0-0.006,0-0.009c3.019,0.331,7,3.571,7,8.509c0,3.826-3.691,8.5-8,8.5h-7.5c-3.238,0-4.5-1.262-4.5-4.5V12.783l4.078,4.07 C25.176,16.951,25.304,17,25.432,17s0.256-0.049,0.354-0.146c0.195-0.195,0.195-0.513,0-0.707l-4.461-4.452 c-0.594-0.592-1.055-0.592-1.648,0l-4.461,4.452c-0.195,0.194-0.195,0.512,0,0.707s0.512,0.195,0.707,0L20,12.783V26.5 c0,3.804,1.696,5.5,5.5,5.5H33c4.847,0,9-5.224,9-9.5C42,17.333,37.777,13.292,33.958,12.988z" ></path>  </g></g></svg>
                            <div className="space-y-1.5 text-center">
                                <h5 className="whitespace-nowrap text-lg font-medium tracking-tight ">Upload your file</h5>
                                <p className="text-sm text-gray-500">File Should be in PNG, JPEG or JPG formate</p>
                            </div>
                        </label>
                    )}

                    <input onChange={handleFileChange} multiple className="hidden" id="file5" type="file" />
                </div>

                <div className="flex justify-end mt-6">
                    <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-rose-600 rounded-md hover:bg-rose-700">Save</button>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;