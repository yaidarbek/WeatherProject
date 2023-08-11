import { Accordion, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItem } from "react-accessible-accordion";
import './forecast.css'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    return (
        <div>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`} alt="weather" className="icon-small" />
                                    <label htmlFor="" className="day">{forecastDays[idx]}</label>
                                    <label htmlFor="" className="description">{item.weather[0].description}</label>
                                    <label htmlFor="" className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label htmlFor="">Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label htmlFor="">Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label htmlFor="">Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label htmlFor="">Wind speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label htmlFor="">Sea level</label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label htmlFor="">Feels like</label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </div>
    );
};

export default Forecast;