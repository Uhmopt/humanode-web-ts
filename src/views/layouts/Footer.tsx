import { Close } from "@mui/icons-material";
import { Box, Container, IconButton } from "@mui/material";
import { makeStyles } from '@mui/styles'
import React from "react";
import TextButton from "views/components/buttons/TextButton";
import CustomText from "views/components/CustomText";
const useStyles: any = makeStyles({
	root: {
		backdropFilter: "blur(2px)"
	},
})
interface Props {
	isDisplay?: boolean;
	title?: string;
}
const Footer: React.FC<Props> = ({ isDisplay = false, title = "HOME" }) => {
	const classes = useStyles();
	return (
		<div>
			{(isDisplay ?? false) && (
				<Container maxWidth="xl">
					<Box sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
						<div className="fixed left-0 bottom-10 w-full flex justify-center sm:hidden z-10">
							<div className="flex flex-col items-center">
								<CustomText variant="h5" className="backdrop-blur-sm">{title}</CustomText>
								<TextButton to="/home">
									<IconButton size="small" className={classes?.root}>
										<Close fontSize="large" />
									</IconButton>
								</TextButton>
							</div>

						</div>
					</Box>
				</Container>
			)}
			<div className="fixed left-1/2 -translate-x-1/2 bottom-0 bg-white w-36 h-1 rounded-full mx-auto mb-2 sm:hidden"></div>
		</div>
	)
}
export default Footer