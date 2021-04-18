import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const Version = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        className=" mt-2 mb-3"
        onClose={() => setShow(false)}
        variant="success"
        dismissible
      >
        <Alert.Heading>
          Version: <strong>1.2</strong>
        </Alert.Heading>
        <p className="text-left m-0 mb-2">
          <strong>Update:</strong> Vercel does not support disabling HTTPS on
          their server. Because of this reason, any live streams coming from
          HTTP server or with orange check mark (
          <FaCheck style={{ fill: "orange" }} />) breaks on their server. We
          have hosted our application on
          <a
            href="http://jackal.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-danger"
          >
            <strong>&nbsp;SURGE&nbsp;</strong>
          </a>
          to make sure our visitors can view live streams seamlessly.
        </p>
      </Alert>
    );
  }
  return null;
};
export default Version;
