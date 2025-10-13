import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { ShoppingBag } from 'lucide-react';

interface EmailConfirmationTemplateProps {
    userFirstname: string;
    confirmEmailLink?: string;
}

export const EmailConfirmationTemplate = ({
  userFirstname,
  confirmEmailLink,
}: EmailConfirmationTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>
        Confirm your email to complete your registration 
      </Preview>
      <Container style={container}>
        <ShoppingBag size={32} style={logo} />
        <Text style={paragraph}>Hi {userFirstname},</Text>
        <Text style={paragraph}>
            Thank you for signing up! Please confirm your email address by clicking the button below.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href={confirmEmailLink} target="_blank">
            Activate your account
          </Button>
        </Section>
        <Text style={paragraph}>
          Best regards,
          <br />
          <strong>The Developer Team</strong>
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
            © 2025 E-commerce. All rights reserved.
        </Text>
      </Container>
    </Body>
  </Html>
);

EmailConfirmationTemplate.PreviewProps = {
  userFirstname: 'May',
  confirmEmailLink: 'https://example.com/reset-password',
} as EmailConfirmationTemplateProps;

export default EmailConfirmationTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
};

const logo = {
  margin: '0 auto',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
  
};

const btnContainer = {
  textAlign: 'center' as const,
};

const button = {
  backgroundColor: '#5F51E8',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '16px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '12px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
};
