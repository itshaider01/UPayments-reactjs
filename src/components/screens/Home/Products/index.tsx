import {IProduct} from "../../../../interface";
import {useNavigate} from "react-router-dom";

interface IProductsProps {
	items: IProduct[];
}

const Products: React.FC<IProductsProps> = ({items}) => {
	const navigate = useNavigate();

	const renderProducts = (): JSX.Element[] => {
		if (!items) return [];

		return items.map((item: IProduct) => {
			return (
				<div className="w-56 flex flex-col justify-around  mb-16  hover:cursor-pointer ">
					<div
						key={item.id}
						className="gap-y-2 bg-white rounded-xl py-6 h-70 mb-2"
						onClick={() => {
							navigate(`/detail/${item.id}`);
						}}
					>
						<img
							className="object-contain h-56 w-56 p-4"
							src={item.avatar}
							alt="img"
						/>
					</div>
					<p className="font-semibold truncate mb-4">{item.name}</p>
					<p className="font-normal self-center"> $ {item.price}</p>
				</div>
			);
		});
	};

	return (
		<>
			<div className="flex">
				<div className="flex flex-row items-center justify-between  m-auto  mt-24">
					<div className="m-auto max-w-[1100px] flex flex-wrap justify-around mx-24">
						{renderProducts()}
					</div>
				</div>
				<button
					className=" bottom-0 right-0 mr-16 mb-12 fixed"
					onClick={() => {
						navigate(`/create`);
					}}
				>
					<img src="/imgs/plusIcon.svg" alt="plusIcon"/>
				</button>
			</div>
		</>
	);
};
export default Products;
