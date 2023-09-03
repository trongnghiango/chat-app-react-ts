import { Outlet, useParams } from "react-router-dom";
import { ConversationSidebar } from "../components/conversations/ConversationSidebar";
import { Page } from "../utils/styles";
import { ConversationPanel } from "../components/conversations/ConversationPanel";
import mockConversation from "../__mocks__/conversations";

export const ConversationsPage = () => {

  const { id } = useParams();
  console.log('param::', useParams())
  return (
    <Page>
      <ConversationSidebar conversations={mockConversation} />
      {!id && <ConversationPanel />}
      <Outlet />
    </Page>
  );
}