import React, { useState } from "react";
import { ListGroup, ProgressBar, Tab, Tabs } from "react-bootstrap";

const AsideMenu = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <aside className="aside-menu">
      <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)}>
        <Tab eventKey="1" title={<i className="fas fa-list-ul" />}></Tab>
        <Tab eventKey="2" title={<i className="fas fa-comment-alt" />}></Tab>
        <Tab eventKey="3" title={<i className="fas fa-cog" />}></Tab>
      </Tabs>
      <Tab.Container activeKey={activeTab}>
        <Tab.Content>
          <Tab.Pane eventKey="1">
            <ListGroup className="list-group-accent" as={"div"}>
              <ListGroup.Item className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
                Today
              </ListGroup.Item>
              <ListGroup.Item
                action
                tag="a"
                href="#"
                className="list-group-item-accent-warning list-group-item-divider"
              >
                <div className="avatar float-right">
                  <img
                    className="img-avatar"
                    src="assets/img/avatars/7.jpg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>
                  Meeting with <strong>Lucas</strong>{" "}
                </div>
                <small className="text-muted mr-3">
                  <i className="fas fa-calendar" />
                  &nbsp; 1 - 3pm
                </small>
                <small className="text-muted">
                  <i className="fas fa-map-marker-alt" /> Palo Alto, CA
                </small>
              </ListGroup.Item>
              <ListGroup.Item
                action
                tag="a"
                href="#"
                className="list-group-item-accent-info list-group-item-divider"
              >
                <div className="avatar float-right">
                  <img
                    className="img-avatar"
                    src="assets/img/avatars/4.jpg"
                    alt="admin@bootstrapmaster.com"
                  />
                </div>
                <div>
                  Skype with <strong>Megan</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="fas fa-calendar" />
                  &nbsp; 4 - 5pm
                </small>
                <small className="text-muted">
                  <i className="fas fa-home" /> On-line
                </small>
              </ListGroup.Item>
              <ListGroup.Item className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">
                Tomorrow
              </ListGroup.Item>
              <ListGroup.Item
                action
                tag="a"
                href="#"
                className="list-group-item-accent-danger list-group-item-divider"
              >
                <div>
                  New UI Project - <strong>deadline</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="fas fa-calendar" />
                  &nbsp; 10 - 11pm
                </small>
                <small className="text-muted">
                  <i className="fas fa-home" />
                  &nbsp; creativeLabs HQ
                </small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/2.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/3.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/4.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/5.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/6.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item
                action
                tag="a"
                href="#"
                className="list-group-item-accent-success list-group-item-divider"
              >
                <div>
                  <strong>#10 Startups.Garden</strong> Meetup
                </div>
                <small className="text-muted mr-3">
                  <i className="fas fa-calendar" />
                  &nbsp; 1 - 3pm
                </small>
                <small className="text-muted">
                  <i className="fas fa-map-marker-alt" />
                  &nbsp; Palo Alto, CA
                </small>
              </ListGroup.Item>
              <ListGroup.Item
                action
                tag="a"
                href="#"
                className="list-group-item-accent-primary list-group-item-divider"
              >
                <div>
                  <strong>Team meeting</strong>
                </div>
                <small className="text-muted mr-3">
                  <i className="fas fa-calendar" />
                  &nbsp; 4 - 6pm
                </small>
                <small className="text-muted">
                  <i className="fas fa-home" />
                  &nbsp; creativeLabs HQ
                </small>
                <div className="avatars-stack mt-2">
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/2.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/3.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/4.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/5.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/6.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/7.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                  <div className="avatar avatar-xs">
                    <img
                      src={"assets/img/avatars/8.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </div>
              </ListGroup.Item>
            </ListGroup>
          </Tab.Pane>
          <Tab.Pane eventKey="2" className="p-3">
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
            <hr />
            <div className="message">
              <div className="py-3 pb-5 mr-3 float-left">
                <div className="avatar">
                  <img
                    src={"assets/img/avatars/7.jpg"}
                    className="img-avatar"
                    alt="admin@bootstrapmaster.com"
                  />
                  <span className="avatar-status badge-success" />
                </div>
              </div>
              <div>
                <small className="text-muted">Lukasz Holeczek</small>
                <small className="text-muted float-right mt-1">1:52 PM</small>
              </div>
              <div className="text-truncate font-weight-bold">
                Lorem ipsum dolor sit amet
              </div>
              <small className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt...
              </small>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="3" className="p-3">
            <h6>Settings</h6>
            <div className="aside-options">
              <div className="clearfix mt-4">
                <small>
                  <b>Option 1</b>
                </small>
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>
            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 2</b>
                </small>
              </div>
              <div>
                <small className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </small>
              </div>
            </div>
            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 3</b>
                </small>
                <div>
                  <small className="text-muted">Option disabled.</small>
                </div>
              </div>
            </div>
            <div className="aside-options">
              <div className="clearfix mt-3">
                <small>
                  <b>Option 4</b>
                </small>
              </div>
            </div>
            <hr />
            <h6>System Utilization</h6>
            <div className="text-uppercase mb-1 mt-4">
              <small>
                <b>CPU Usage</b>
              </small>
            </div>
            <ProgressBar className="progress-xs" variant="info" now="25" />
            <small className="text-muted">348 Processes. 1/4 Cores.</small>
            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>Memory Usage</b>
              </small>
            </div>
            <ProgressBar className="progress-xs" variant="warning" now="70" />
            <small className="text-muted">11444GB/16384MB</small>
            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 1 Usage</b>
              </small>
            </div>
            <ProgressBar className="progress-xs" variant="danger" now="95" />
            <small className="text-muted">243GB/256GB</small>
            <div className="text-uppercase mb-1 mt-2">
              <small>
                <b>SSD 2 Usage</b>
              </small>
            </div>
            <ProgressBar className="progress-xs" variant="success" now="10" />
            <small className="text-muted">25GB/256GB</small>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </aside>
  );
};

export default AsideMenu;
