import React, { useMemo } from 'react';
import { projects } from '../data/projects';
import { FaMicrochip, FaTools, FaCode, FaPlug } from 'react-icons/fa';

const Resources = () => {
    // Dynamically aggregate wiring data from all projects
    const componentDatabase = useMemo(() => {
        const db = {};

        projects.forEach(project => {
            if (project.wiring) {
                project.wiring.forEach(item => {
                    // Normalize component name to group similar items (e.g. "OLED SDA" -> "OLED Display")
                    let category = item.component.split('(')[0].trim();
                    if (category.includes('Motor')) category = 'L298N Motor Driver';
                    if (category.includes('OLED')) category = 'OLED Display (SH1106/SSD1306)';
                    if (category.includes('MPU6050')) category = 'MPU6050 IMU';
                    if (category.includes('Sonar')) category = 'HC-SR04 Ultrasonic Sensor';

                    if (!db[category]) {
                        db[category] = [];
                    }

                    db[category].push({
                        project: project.title,
                        projectId: project.id,
                        componentRaw: item.component,
                        pin: item.pin
                    });
                });
            }
        });
        return db;
    }, []);

    return (
        <div className="resources-page container">
            <header className="page-header">
                <h1 className="page-title">Technical <span className="text-accent">Resources</span></h1>
                <p className="page-subtitle">Documentation, wiring standards, and tools used in the lab.</p>
            </header>

            <div className="resources-grid">
                {/* Wiring Database Column */}
                <div className="resource-column">
                    <section className="resource-section">
                        <h2 className="section-title"><FaPlug /> Component Wiring Database</h2>
                        <p className="section-desc">Aggregated pinout configurations from all projects.</p>

                        <div className="component-list">
                            {Object.entries(componentDatabase).map(([component, connections]) => (
                                <div key={component} className="component-card">
                                    <h3 className="component-name">{component}</h3>
                                    <div className="connections-list">
                                        {connections.map((conn, idx) => (
                                            <div key={idx} className="connection-item">
                                                <div className="conn-pin">
                                                    <span className="pin-label">{conn.componentRaw}:</span>
                                                    <code>{conn.pin}</code>
                                                </div>
                                                <div className="conn-project">
                                                    Ref: <a href={`/project/${conn.projectId}`}>{conn.project}</a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Snippets & Tools Column */}
                <div className="resource-column">
                    <section className="resource-section">
                        <h2 className="section-title"><FaCode /> Common Snippets</h2>
                        <div className="snippet-card">
                            <h3>Standard PID Loop</h3>
                            <pre><code>{`float error = setpoint - current;
P = Kp * error;
I += Ki * error * dt;
D = Kd * (error - prevError) / dt;
output = P + I + D;`}</code></pre>
                        </div>
                        <div className="snippet-card">
                            <h3>ESP32 WiFi Connect</h3>
                            <pre><code>{`WiFi.begin(SSID, PASSWORD);
while (WiFi.status() != WL_CONNECTED) {
  delay(500);
  Serial.print(".");
}`}</code></pre>
                        </div>
                    </section>

                    <section className="resource-section">
                        <h2 className="section-title"><FaTools /> Lab Equipment</h2>
                        <ul className="tool-list">
                            <li><FaMicrochip /> <strong>Microcontrollers:</strong> ESP32-WROOM, ESP32-S3, ESP32-C3 SuperMini</li>
                            <li><FaTools /> <strong>Prototyping:</strong> Soldering Station (T12), Breadboards, Jumper Wires</li>
                            <li><FaMicrochip /> <strong>Sensors:</strong> MPU6050, HC-SR04, VL53L0X ToF</li>
                            <li><FaTools /> <strong>3D Printing:</strong> Ender 3 V2 (PLA/PETG)</li>
                        </ul>
                    </section>
                </div>
            </div>

            <style>{`
                .resources-page {
                    padding: var(--spacing-md) 0;
                }
                
                .page-header {
                    text-align: center;
                    margin-bottom: var(--spacing-xl);
                }
                
                .resources-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 3rem;
                    align-items: start; /* Align top */
                }
                
                @media (max-width: 900px) {
                    .resources-grid {
                        grid-template-columns: 1fr;
                    }
                }
                
                /* Wiring Column (Left) - Scrollable */
                .resource-column:first-child {
                    height: 114vh;
                    min-height: 350px;
                    overflow-y: auto;
                    padding-right: 0.5rem;
                }

                /* Snippets Column (Right) - Static */
                .resource-column:last-child {
                    height: auto;
                    overflow: visible;
                }

                /* Custom Scrollbar for the scrollable column */
                .resource-column:first-child::-webkit-scrollbar {
                    width: 6px;
                }
                
                .resource-column::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 3px;
                }
                
                .resource-column::-webkit-scrollbar-thumb {
                    background: var(--color-accent);
                    border-radius: 3px;
                    opacity: 0.5;
                }
                
                .section-title {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 0.5rem;
                    color: var(--color-accent);
                    border-bottom: 2px solid var(--color-border);
                    padding-bottom: 0.5rem;
                }
                
                .section-desc {
                    color: var(--color-text-secondary);
                    margin-bottom: 1.5rem;
                    font-size: 0.95rem;
                }
                
                .component-list {
                    /* Scroll handled by parent column */
                }
                
                /* Scrollbar styles moved to resource-column */
                
                .component-card {
                    background: var(--color-bg-secondary);
                    border: 1px solid var(--color-border);
                    border-radius: 8px;
                    padding: 1.25rem;
                    margin-bottom: 1.5rem;
                }
                
                .component-name {
                    margin-top: 0;
                    margin-bottom: 1rem;
                    color: var(--color-text-primary);
                    font-size: 1.1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                    padding-bottom: 0.5rem;
                }
                
                .connection-item {
                    margin-bottom: 0.75rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
                }
                
                .connection-item:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }
                
                .conn-pin {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.25rem;
                }
                
                .pin-label {
                    color: var(--color-text-secondary);
                    font-size: 0.9rem;
                }
                
                .conn-pin code {
                    background: rgba(255, 159, 28, 0.1);
                    color: var(--color-accent);
                    padding: 0.1rem 0.4rem;
                    border-radius: 4px;
                    font-family: var(--font-family-mono);
                    font-size: 0.85rem;
                }
                
                .conn-project {
                    font-size: 0.8rem;
                    color: var(--color-text-secondary);
                    text-align: right;
                }
                
                .conn-project a {
                    color: var(--color-text-secondary);
                    opacity: 0.7;
                    text-decoration: none;
                }
                
                .conn-project a:hover {
                    color: var(--color-accent);
                    opacity: 1;
                }
                
                .snippet-card {
                    background: var(--color-bg-card);
                    border-radius: 8px;
                    padding: 1rem;
                    margin-bottom: 1.5rem;
                }
                
                .snippet-card h3 {
                    margin-top: 0;
                    font-size: 1rem;
                    color: var(--color-text-secondary);
                    margin-bottom: 0.5rem;
                }
                
                .snippet-card pre {
                    background: #111;
                    padding: 1rem;
                    border-radius: 4px;
                    overflow-x: auto;
                    margin: 0;
                }
                
                .snippet-card code {
                    font-family: var(--font-family-mono);
                    font-size: 0.85rem;
                    color: #e0e0e0;
                }
                
                .tool-list {
                    list-style: none;
                    padding: 0;
                }
                
                .tool-list li {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem;
                    background: var(--color-bg-secondary);
                    margin-bottom: 0.5rem;
                    border-radius: 6px;
                    font-size: 0.95rem;
                }
                
                .tool-list li svg {
                    color: var(--color-accent-secondary);
                }
            `}</style>
        </div>
    );
};

export default Resources;
