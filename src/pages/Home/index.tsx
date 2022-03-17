import { useUser } from "../../context/user";

import LoginForm from "../../components/LoginForm";
import UserSection from "../../components/UserSection";

interface HomeProps {}

export const Home = ({  }: HomeProps) => {
	const { user } = useUser()

	return (
		<main className="Home">
			{user ?
				<UserSection />
			: 
				<LoginForm />
			}
		</main>
	)
}

export default Home;