import HeaderText from "./Text";
import HeaderTextContainer from "./Text/Container";
import { CONSTS } from "../../../../consts";

type Props = {
	isTopPage?: boolean;
	title: string;
};

export default function Header({ isTopPage = false, title }: Props) {
	return (
		<>
			<header className="firstIn opacity-0 flex flex-col justify-center">
				<div className="max-w-[1200px]flex justify-center items-center">
					{isTopPage ? (
						<HeaderTextContainer>
							<HeaderText>
								Software engineer during reboot, and Japanese company employee
							</HeaderText>
						</HeaderTextContainer>
					) : (
						<HeaderTextContainer>
							<a href="/">
								<HeaderText>{CONSTS.SITE_NAME} /</HeaderText>
							</a>
						</HeaderTextContainer>
					)}
				</div>
				<div className="flex justify-center items-center">
					<h1 className="font-bold text-[64px] sm:text-[96px]">{title}</h1>
				</div>
			</header>
		</>
	);
}
