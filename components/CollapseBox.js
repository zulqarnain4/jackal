import React, { useState } from "react";
import Listing from "./Listing";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Card, Accordion, Badge } from "react-bootstrap";
import ReactCountryFlag from "react-country-flag";

const CollapseBox = ({ urls, channel, setChannel }) => {
  const [show, setShow] = useState(null);
  const edgeFlags = (country) => {
    if (country === "Gambia")
      return <ReactCountryFlag className="mr-2" svg countryCode="gm" />;
    if (country === "Bahamas")
      return <ReactCountryFlag className="mr-2" svg countryCode="bs" />;
    if (country === "Ivory Coast")
      return <ReactCountryFlag className="mr-2" svg countryCode="ie" />;
    if (country === "Kosovo")
      return <ReactCountryFlag className="mr-2" svg countryCode="xk" />;
    if (country === "Myanmar")
      return <ReactCountryFlag className="mr-2" svg countryCode="mm" />;
    if (country === "Palestine")
      return <ReactCountryFlag className="mr-2" svg countryCode="ps" />;
    if (country === "Vatican City")
      return <ReactCountryFlag className="mr-2" svg countryCode="va" />;
    if (country === "Virgin Islands of the United States")
      return <ReactCountryFlag className="mr-2" svg countryCode="vi" />;
    return null;
  };
  return (
    <Accordion className="rounded-0">
      {urls.map(({ content, id, code }) => {
        const handleClick = (e, id) => {
          const key = e.currentTarget.dataset.key
            ? Number(e.currentTarget.dataset.key)
            : 0;
          if (key === id) {
            setShow(id);
          } else {
            setShow(null);
          }
        };
        return (
          <Card key={id} className="rounded-0 border-0 shadow-lg">
            <Accordion.Toggle
              className="bg-dark p-0"
              variant="dark"
              as={Card.Header}
              eventKey={id}
              data-key={id}
              onClick={(e) => handleClick(e, id)}
            >
              {content.length !== 0 ? (
                <div
                  className={`d-flex align-items-center ${
                    show === id ? "bg-black" : ""
                  }`}
                >
                  <Badge variant="secondary" className="p-3 rounded-0 badge">
                    {content.length}
                  </Badge>
                  <div className="mx-3 w-100 d-flex justify-content-between align-items-center">
                    <span className="channel-title d-flex align-items-center">
                      {code !== null ? (
                        <ReactCountryFlag
                          className="mr-2"
                          svg
                          countryCode={code.iso2}
                        />
                      ) : (
                        edgeFlags(content[0].country)
                      )}
                      <span>{content[0].country}</span>
                    </span>
                    {show === id ? (
                      <FaChevronUp style={{ fill: "#888" }} />
                    ) : (
                      <FaChevronDown style={{ fill: "#888" }} />
                    )}
                  </div>
                </div>
              ) : (
                "Undefined"
              )}
            </Accordion.Toggle>
            {show === id ? (
              <Accordion.Collapse
                eventKey={id}
                children={
                  <Card.Body className="bg-dark p-0">
                    <Listing
                      item={content}
                      channel={channel}
                      setChannel={setChannel}
                    />
                  </Card.Body>
                }
              />
            ) : null}
          </Card>
        );
      })}
    </Accordion>
  );
};

export default CollapseBox;
