import { useUser } from "../../context/user";

import LoginForm from "../../components/LoginForm";
import UserSection from "../../components/UserSection";

export const Home = () => {
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