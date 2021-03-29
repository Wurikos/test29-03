import React from "react";
import theme from "theme";
import { Theme, Link, Text, Input, Button, List, Image, Icon, Hr, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { StackItem, Stack, SocialMedia, Section, Menu, GoogleMap, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdFace } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.Newcomp quarkly-title="Newcompgg" />
		<Box>
			<StackItem>
				<Text font="--lead">
					Stack item
				</Text>
			</StackItem>
			<Stack>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}First Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex">
					{"        "}
					<Text font="--lead" margin="0px 0px 0px 0px" display="inline-block">
						{"            "}Second Item{"\n        "}
					</Text>
					{"    "}
				</StackItem>
			</Stack>
			<SocialMedia
				facebook="https://www.facebook.com/quarklyapp/"
				twitter="https://twitter.com/quarklyapp"
				youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
				vkontakte="https://vk.com/quarklyapp"
				telegram="https://t.me/joinchat/DqSYDhS0R9nMRvOtFbIxrQ"
			/>
			<Section />
			<Menu />
			<GoogleMap />
			<Formspree errorMessage="Something went wrong" completeText="Success">
				<Input name="email" placeholder="Email" margin-right="4px" />
				<Button>
					Submit
				</Button>
			</Formspree>
			<Text>
				Some text
			</Text>
			<List>
				<Text>
					First item
				</Text>
			</List>
			<Link href="#">
				Some text
			</Link>
			<Input />
			<Image width="64px" height="64px" />
			<Icon category="md" icon={MdFace} />
			<Hr />
			<Button>
				Button
			</Button>
		</Box>
		<Components.Box1 />
		<Components.Box1 />
		<Components.Box1 />
		<Menu />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});