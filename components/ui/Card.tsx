import * as React from "react";
import { View, Text, StyleSheet, ViewProps, TextProps } from "react-native";

interface CardProps extends ViewProps { }
interface CardHeaderProps extends ViewProps {
    children?: React.ReactNode;
}
interface CardTitleProps extends TextProps { }
interface CardDescriptionProps extends TextProps { }
interface CardContentProps extends ViewProps { }
interface CardFooterProps extends ViewProps { }

const Card = React.forwardRef<View, CardProps>(({ style, ...props }, ref) => (
    <View
        ref={ref}
        style={[styles.card, style]}
        {...props}
    />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<View, CardHeaderProps>(({ style, ...props }, ref) => (
    <View
        ref={ref}
        style={[styles.cardHeader, style]}
        {...props}
    >
        {props.children}
    </View>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<Text, CardTitleProps>(({ style, ...props }, ref) => (
    <Text
        ref={ref}
        style={[styles.cardTitle, style]}
        {...props}
    />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<Text, CardDescriptionProps>(({ style, ...props }, ref) => (
    <Text
        ref={ref}
        style={[styles.cardDescription, style]}
        {...props}
    />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<View, CardContentProps>(({ style, ...props }, ref) => (
    <View
        ref={ref}
        style={[styles.cardContent, style]}
        {...props}
    />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<View, CardFooterProps>(({ style, ...props }, ref) => (
    <View
        ref={ref}
        style={[styles.cardFooter, style]}
        {...props}
    />
));
CardFooter.displayName = "CardFooter";

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardHeader: {
        padding: 24,
        paddingBottom: 16,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000",
    },
    cardDescription: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
    },
    cardContent: {
        padding: 24,
        paddingTop: 0,
    },
    cardFooter: {
        padding: 24,
        paddingTop: 16,
        flexDirection: "row",
        alignItems: "center",
    },
});

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };